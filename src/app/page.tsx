import { Card } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex gap-4 my-32">
      <Card type='add' />
      <Card type='task' content="During Tania’s party last week someone broke the sofa" date="08/08/2024" title="Urien mano" />
      <Card type='task' content="During Tania’s party last week someone broke the sofa" title="Urien"/>

    </div>

    </>
  );
}
