import Header from "@/components/Header";
import Form from "@/components/UrlForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <Header />
      <Form />
    </main>
  );
}
