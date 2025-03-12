import { OpenAI } from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { Chat, Intention, intentionSchema, IntentionType } from "@/types";
import { HISTORY_CONTEXT_LENGTH } from "@/configuration/chat";
import { INTENTION_PROMPT } from "@/configuration/prompts";
import { INTENTION_MODEL } from "@/configuration/models";

/**
 * IntentionModule is responsible for detecting intentions
 */
export class IntentionModule {
  static async detectIntention({
    chat,
    openai,
  }: {
    chat: Chat;
    openai: OpenAI;
  }): Promise<Intention> {
    /**
     * Determine the intention of the user based on the most recent messages
     */
    const mostRecentMessages = chat.messages
      .slice(-HISTORY_CONTEXT_LENGTH)
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    // Adjust the response format if necessary
    try {
      const response = await openai.chat.completions.create({
        model: INTENTION_MODEL,
        messages: [
          { role: "system", content: INTENTION_PROMPT() },
          ...mostRecentMessages,
        ],
      });

      const parsedResponse = zodResponseFormat(response, intentionSchema);

      // Check if parsedResponse is valid
      if (!parsedResponse || !parsedResponse.choices || !parsedResponse.choices[0].message.parsed) {
        return { type: "random" as IntentionType };
      }
      return parsedResponse.choices[0].message.parsed;
    } catch (error) {
      console.error("Error detecting intention:", error);
      return { type: "random" as IntentionType }; // Default in case of error
    }
  }
}

