import { Oval } from "react-loader-spinner";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex">
    <Oval
      height={20}
      width={20}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
    <span className="text-gray-300 ml-2 mr-2"> Submitting...</span>
    </div>

  )  
}

export default LoadingSpinner

