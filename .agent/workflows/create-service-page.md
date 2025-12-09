---
description: Workflow for creating or refactoring a service page with LLM visibility
---

# Creating a Service Page with LLM Visibility

Follow these steps strictly when creating a new page or refactoring an existing one to ensure it is visible to LLMs (ChatGPT, Claude, etc.).

## 1. Structure the Page
The page MUST be split into a Server Component (entry point) and a Client Component (interactive UI).

- **Page File**: `src/app/path/to/page.tsx` (Server Component)
- **Client Component**: `src/app/path/to/PageClient.tsx` (Client Component)

## 2. Implement the Client Component
Move all interactive logic (`useState`, `useEffect`, event handlers) to the Client Component.
- Add `'use client';` at the top.
- Export it as default or named export.

## 3. Implement the Server Component (page.tsx)
This file MUST be a Server Component (do NOT use `'use client'`).

### Checklist for `page.tsx`:
1.  **Imports**:
    - Import `Metadata` from `next`.
    - Import the Client Component.
    - Import `LLMHiddenContent` from `@/components/LLMHiddenContent`.

2.  **Metadata**:
    - Export a `metadata` object with `title`, `description`, and `openGraph`.

3.  **Render**:
    - Return a Fragment `<>`.
    - Render the Client Component first.
    - Render `<LLMHiddenContent>` second.

4.  **Hidden Content**:
    - Inside `<LLMHiddenContent>`, add semantic HTML (`h1`, `h2`, `p`, `ul`).
    - **Title**: Main `<h1>` with the service name.
    - **Description**: Detailed `<p>` explaining the service.
    - **Features**: `<ul>` with `<li>` items.
    - **Price**: Clear price information if applicable.
    - **FAQs**: `<h2>Preguntas Frecuentes</h2>` followed by Q&A.

## Example `page.tsx`

```tsx
import { Metadata } from 'next';
import ServiceClient from './ServiceClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Service Name | Brand',
  description: 'Service description...',
};

export default function ServicePage() {
  return (
    <>
      <ServiceClient />
      <LLMHiddenContent>
        <h1>Service Name</h1>
        <p>Full description...</p>
        <h2>Features</h2>
        <ul>
            <li>Feature 1</li>
        </ul>
      </LLMHiddenContent>
    </>
  );
}
```

## 4. Verification
- Run `npm run build` to ensure no errors.
- Check that `page.tsx` does NOT have `'use client'`.
