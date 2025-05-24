// import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-[700px] h-[700px] bg-red-300">
        <Image
          src='https://images.pexels.com/photos/16105790/pexels-photo-16105790/free-photo-of-toa-nha-d-ng-lau-dai-l-ch-s.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt="suffer"
          width={500}
          height={500}
          quality={100}
        />
      </div>
    </main>
  );
}
