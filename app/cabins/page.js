export const metadata = {
  title: "Cabins",
};

export default function Page() {
  return (
    <div>
      <h1>Cabins Page</h1>
    </div>
  );
}
//*******************Data Fetching**************************
//In Next.js we should fetch data in React Server Component. This component is a React server component. So here we can fetch data.

//*********************Data Passing**************************************
//We can pass data from React Server Component to React Client Component via props.
// Ex: Here we passing the users data from this component to Counter Component. Counter Component is a React Client Component.
// We can not use React Hooks in React Server Component
