---
title: ContextOps.AI Reference
description: A comprehensive reference for ContextOps.AI features and usage.
---

### API Usage Guide: Chat Completion Endpoints

This guide outlines how to use the core API endpoints available for interacting with ContextOps.AI via HTTP requests. These endpoints follow an OpenAI-compatible schema for chat-based interactions.

---

### Base URL

For local deployments:
```
http://localhost:3000
```

For managed or cloud-hosted deployments, use the appropriate HTTPS endpoint provided by your administrator.

---

#### Endpoint: `POST /api/chat/completions`
This endpoint is used to initiate a new chat interaction with a selected language model.

#### Request
**URL:**
```
POST /api/chat/completions
```

**Headers:**
- `Authorization: Bearer YOUR_API_KEY`
- `Content-Type: application/json`

**Body:**
```json
{
  "model": "llama3.1",
  "messages": [
    {
      "role": "user",
      "content": "Why is the sky blue?"
    }
  ]
}
```

#### Parameters
- `model` (string): Required. Name of the model to be used.
- `messages` (array): Required. An array of message objects in OpenAI-compatible format.
  - `role`: One of `user`, `assistant`, or `system`
  - `content`: Text content of the message

#### Response
The response will contain a chat completion object:
```json
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1710000000,
  "model": "llama3.1",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "The sky appears blue because..."
      },
      "finish_reason": "stop"
    }
  ]
}
```

---

### Model Listing (Optional for Admins)

### Endpoint: `GET /api/models`
This endpoint lists the currently available models on your instance.

#### Response:
```json
[
  {
    "id": "llama3.1",
    "object": "model",
    "created": 1710000000,
    "owned_by": "contextops"
  },
  {
    "id": "gpt-3.5",
    "object": "model",
    "created": 1710000001,
    "owned_by": "openai"
  }
]
```

This can be used to dynamically populate model selection in custom clients or validate model support.

---

For more advanced integrations, including streaming, tool calls, and multi-turn conversations, please refer to the extended API documentation or contact your administrator.

