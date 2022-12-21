import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=> {
    let products = await Product.find()
    let beds= { }
    for(let item of products){
      if (item.title in beds){
        if (!beds[item.title].color.includes(item.color) && item.availableQty > 0){
          beds[item.title].color.push(item.color)
        }
        if (!beds[item.title].size.includes(item.size) && item.availableQty > 0){
          beds[item.title].size.push(item.size)
        }
        
      }
      else{

          beds[item.title]=JSON.parse(JSON.stringify(item))
          if(item.availableQty > 0){
              beds[item.title].color = [item.color]
              beds[item.title].size = [item.size]
        }

      }
    }
    res.status(200).json({ beds })
}
  export default connectDb(handler);
  