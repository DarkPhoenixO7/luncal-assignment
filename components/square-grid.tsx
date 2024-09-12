export default function SquareGrid() {
    return (
      <div className="grid grid-cols-2 gap-[2px]">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-[#4A4E54] rounded-sm relative p-1">
          </div>
        ))}
      </div>
    );
  }