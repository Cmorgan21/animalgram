import { axiosReq } from '../api/axiosDefaults';

export const getConversations = async () => {
    try {
        const response = await axiosReq.get('/conversations/');
        return response.data;
    } catch (error) {
        console.error('Error fetching conversations:', error);
        throw error;
    }
};

export const getMessages = async (conversationId) => {
    try {
        const response = await axiosReq.get(`/conversations/${conversationId}/messages/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};

export const sendMessage = async (conversationId, message) => {
    try {
        const response = await axiosReq.post('/messages/', {
            conversation: conversationId,
            ...message
        });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const createConversation = async (conversationData) => {
    try {
        const response = await axiosReq.post('/conversations/', conversationData);
        return response.data;
    } catch (error) {
        console.error('Error creating conversation:', error);
        throw error;
    }
};
