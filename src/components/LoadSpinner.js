const LoadSpinner = props => {
    return <div className="w-64 mx-auto h-16 p-2 bg-gray-900 flex rounded-full">
        <div className="border-4 rad rounded-full w-12 h-12 animate-spin flex items-center justify-center"></div><div className="text-white my-auto ml-5"><p>{props.message}</p></div>
    </div>

};

export default LoadSpinner;