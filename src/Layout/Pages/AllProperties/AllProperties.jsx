import UseProperty from "../../../Hook/UseProperty";
import AllPropertiesCard from "./AllPropertiesCard";


const AllProperties = () => {
    const [properties]=UseProperty();
    
    return (
        <div>
            <div className="mx-auto text-center md:w-4/12 my-8">
           
           <h3 className="text-3xl text-orange-400 uppercase border-y-4 py-4">Properties</h3>
       </div>
       <div className="grid md:grid-cols-3 gap-10">
                {
                    properties.map(item => <AllPropertiesCard  key={item._id}
                        item={item} ></AllPropertiesCard>
                       
                   )
                }
            </div>
        </div>
    );
};

export default AllProperties;