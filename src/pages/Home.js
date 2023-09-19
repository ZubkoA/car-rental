import CompanyName from "../ui/CompanyName";

const Home = () => {
  return (
    <div className="bg-home-pattern h-full bg-cover bg-center px-32 text-center ">
      <div className="mx-0 pt-64 text-6xl font-bold text-white drop-shadow-2xl">
        Car rental in Ukraine with
        <CompanyName type="big" />
      </div>
    </div>
  );
};

export default Home;
