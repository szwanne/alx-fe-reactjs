import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Good demo defaults
      staleTime: 60 * 1000, // data considered fresh for 1 minute
      cacheTime: 5 * 60 * 1000, // stays in cache for 5 minutes after unmount
      refetchOnWindowFocus: false, // keep deterministic refetches for demo
    },
  },
});

export default function App() {
  const [tab, setTab] = useState("posts"); // 'home' | 'posts'

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
        <h1>React Query Demo — JSONPlaceholder Posts</h1>

        <div style={{ display: "flex", gap: 8, margin: "12px 0 20px" }}>
          <button onClick={() => setTab("home")}>Home</button>
          <button onClick={() => setTab("posts")}>Posts</button>
        </div>

        {tab === "home" && (
          <div>
            <p>
              This is a dummy page. Navigate to <b>Posts</b>, then come back
              here, then back to <b>Posts</b> again to observe cached data load
              instantly (no network).
            </p>
          </div>
        )}

        {tab === "posts" && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}
