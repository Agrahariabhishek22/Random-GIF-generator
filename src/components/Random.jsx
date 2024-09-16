import Spinner from './Spinner'
import useGif from '../hooks/useGif'


const Random = () => {

  // REACT_APP_GIPHY_API_KEY='dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW'
  // const API_KEY='dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW'
  //   const[gif,setGif]=useState('')
  //   const[loading,setLoading]=useState(true)

  //   function clickHandler(event){
  //     fetchData();
  //   }
  //   async function fetchData(){
  //     setLoading(true)
  //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

  //     const {data}=await axios.get(url);
  //     const imageSoure=data.data.images.downsized_large.url;
  //     setGif(imageSoure);
  //     setLoading(false)
  //   }
  //   useEffect(()=>{
  //     fetchData();
  //   },[])

  const {gif,loader,fetchData}=useGif();

  return (
      <div className='bg-green-400 text-center rounded-lg border border-black mt-3 flex flex-col gap-y-4 item-center w-2/5
      '>
        <h1 className='mt-[15px] text-2xl underline font-bold'>RANDOM GiF </h1>

        {
          loader?(<Spinner/>):(<img src={gif} alt="" width={450} className='mx-auto'/>)
        }
        

        <button className='bg-gray-300 font-semibold text-xl rounded-lg py-2 mb-[20px] w-4/5 mx-auto'  onClick={()=>{fetchData()}}>Generate</button>
      </div>
  )
}

export default Random
