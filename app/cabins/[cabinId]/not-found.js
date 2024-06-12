// Component for displaying a not found page
function NotFound() {
    return (
        <main className='text-center space-y-6 mt-4'>
            {/* Not found message */}
            <h1 className='text-3xl font-semibold'>
                This page could not be found 😥
            </h1>
            {/* Link to back to all cabins */}
            <a
                href='/cabins'
                className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
            >
                Back to all cabins
            </a>
        </main>
    );
}

export default NotFound;
