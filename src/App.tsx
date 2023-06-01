import Card from "./components/card";
import Links from "./components/links";
import Navbar from "./components/navbar";
import Post from "./components/post";

function App() {
  return (
    <div className="bg-[#fafafa] flex items-center justify-center flex-col app">
      <Navbar/>
      <h1 className='text-[#690f7f] text-[30px] pb-[30px] px-[15px  ] text-left w-[1200px]' style={{ fontFamily: 'Gotham Pro Bold' }}>Акциялар, Чегирмалар, Янгиликлар</h1>
      <Card />
      <Links/>
      <Post/>
    </div>
  );
}

export default App;
