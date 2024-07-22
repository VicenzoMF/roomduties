import { AddCard } from "@/components/AddCard";
import { Card } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex gap-4 my-32">
      <AddCard />
      <Card completed={false} content="During Tania’s party last week someone broke the sofa" taskType="default" date={"08/08/2024"} title="Urien mano" createdBy="Urien" />
      <Card completed content="During Tania’s party last week someone broke the sofa" taskType="default" title="Urien" createdBy="Urien"/>

    </div>

    </>
  );
}
