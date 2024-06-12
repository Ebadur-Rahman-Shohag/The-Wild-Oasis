
import { getCountries } from '@/app/_lib/data-service';

// This component asynchronously fetches a list of countries and renders a dropdown select element
// where users can choose their country. It provides a default selected country, name, id, and
// optional class name for styling purposes.
// Let's imagine your colleague already built this component 😃
async function SelectCountry({ defaultCountry, name, id, className }) {
  // Fetch the list of countries
  const countries = await getCountries();

  // Find the flag corresponding to the default country
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? '';

  // Render the select element with options for each country
  return (
    <select
      name={name}
      id={id}
      // Encode the default country and flag into the value
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      {/* Default option */}
      <option value=''>Select country...</option>

      {/* Options for each country */}
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
