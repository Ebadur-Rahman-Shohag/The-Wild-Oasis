"use client";
// Error component to display an error message and provide an option to try again
export default function Error({ error, reset }) {
    console.log(error);
    return (
        <main className="flex justify-center items-center flex-col gap-6">
            {/* Error message */}
            <h1 className="text-3xl font-semibold">Something went wrong!</h1>
            <p className="text-lg">{error.message}</p>

            {/* Button to try again */}
            <button
                onClick={reset}
                className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
            >
                Try again
            </button>
        </main>
    );
}
