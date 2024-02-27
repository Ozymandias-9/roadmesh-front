import Map from "@components/Map";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center justify-center p-24">
      <h1 className="text-white text-2xl font-medium">RoadMesh</h1>
      <Map />
    </main>
  );
}
