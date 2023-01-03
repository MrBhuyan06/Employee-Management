import employeSchema from "../model/employe.schema.js";


/**
 * create a home route
 */
export const home=(req,res) =>
{
    res.send("hello word")
}

/**
 * create a create Employe
 * 
 */
export const createEmp= async (req, res) =>
{
    try {
          const {name, desgination, salary}=req.body

          if( !(name || desgination || salary))
          {
            throw new Error ("All field are required")
          }
          //check for the exixt user
          const extEmp= await employeSchema.findOne({name})

          if(extEmp)
          {
            throw new Error("Entiity is already exit")
          }

          const emp= employeSchema.create({
            name,
            desgination,
            salary
          })

          res.status(200).json({
            emp,
            sucess:"true",
            message:"Emp created successfully"
          })
    } catch (error) {
        console.log(error);
    }
}

/**
 * get a create Employe
 * 
 */

export const getEmp= async(req, res) =>
{
    try {
      const emp=await employeSchema.find();
     res.status(201).json({
      success:true,
      emp
     })
    } catch (error) {
      console.log(error);
      res.json({
        success:false,
        message:error.message
      })
    }
}

/**
 * update a create Employe
 * 
 */

export const updateEmp= async(req, res) =>
{
    try {
      const emp=await employeSchema.findByIdAndUpdate(req.params.id, req.body);
     res.status(200).json({
      success:true,
      emp
     })
    } catch (error) {
      console.log(error);
      res.json({
        success:false,
        message:error.message
      })
    }
}