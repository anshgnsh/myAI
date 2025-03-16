import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hi! Welcome to ${OWNER_NAME} 💜!\nI'm ${AI_NAME}, Purple Bowl's AI assistant.\nHow can I help you today?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 1000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
