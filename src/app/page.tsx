import { Header } from "@/components/component/header";
import { Land } from "@/components/component/land";



export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-blue-300">
      <Land></Land>
      <Header></Header>
    </div>
    </>
  );
}
