import {HeartIcon as HeartIconSolid} from "@heroicons/react/24/solid";

export default function HeartsCount({hearts, size = "4"}: {hearts: number; size?: string}) {
  return (
    <div className="flex space-x-1">
      {Array.from({length: 5}, (_, index) => (
        <HeartIconSolid
          key={index}
          className={`w-${size} h-${size} ${index < hearts ? "text-white" : "text-nextGray-400"}`}
        />
      ))}
    </div>
  );
}
