import { redirect } from "next/navigation";
const SearchInput = () => {
  async function onSubmit(formData: FormData) {
    "use server";
    console.log(formData.get("username"));
    redirect(`/wrap?name=${formData.get("username")}`);
  }
  return (
    <div className="w-full max-w-md mx-auto relative animate-fade-in">
      <form className="relative" action={onSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
          name="username"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
