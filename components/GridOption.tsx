import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
    title: string;
    image?: string;
    className?: string;
};

const GridOption = ({ title, image, className }: Props) => {
    return (
        <Link href={{ pathname: "/", query: { q: title } }} className={cn("grid-option relative", className)}>
          <h2 className="text-xk font-bold">{title}</h2>
          {image && (
            <Image 
            src={image}
            alt={title}
            layout="fill"
            className="object-cover opacity-20 rounded-md"

            />
          )}
        </Link>
    );
};

export default GridOption;
