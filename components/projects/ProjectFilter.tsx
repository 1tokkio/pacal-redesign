"use client";

interface ProjectFilterProps {
  cities: string[];
  selectedCity: string;
  onSelect: (city: string) => void;
}

export default function ProjectFilter({
  cities,
  selectedCity,
  onSelect,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onSelect("")}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
          selectedCity === ""
            ? "bg-primary text-white shadow-md"
            : "bg-white text-text-main border border-gray-200 hover:border-primary/30 hover:text-primary"
        }`}
      >
        Todas
      </button>
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => onSelect(city)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            selectedCity === city
              ? "bg-primary text-white shadow-md"
              : "bg-white text-text-main border border-gray-200 hover:border-primary/30 hover:text-primary"
          }`}
        >
          {city}
        </button>
      ))}
    </div>
  );
}
