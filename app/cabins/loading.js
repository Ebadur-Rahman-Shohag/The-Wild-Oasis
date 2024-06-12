import Spinner from "@/app/_components/Spinner";

// Component for displaying a loading spinner and message
function Loading() {
  return (
    <div className="grid items-center justify-center">
      {/* Spinner */}
      <Spinner />
      {/* Loading message */}
      <p className="text-primary-200">Loading cabin data....</p>
    </div>
  );
}

export default Loading;
