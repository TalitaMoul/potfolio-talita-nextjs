import { readdirSync } from "fs";
import { join } from "path";
import { PetsAlbumClient } from "@/components/PetsAlbumClient";

export default function PetsPage() {
  const petsDir = join(process.cwd(), "public", "pets");
  let photos: { url: string; alt: string }[] = [];

  try {
    photos = readdirSync(petsDir)
      .filter((f) => /\.(png|jpg|jpeg)$/i.test(f))
      .map((f, index) => ({
        url: `/pets/${f}`,
        alt: `Foto da gata ${index + 1}`,
      }));
  } catch {
    // pasta ainda não existe
  }

  return <PetsAlbumClient photos={photos} />;
}
