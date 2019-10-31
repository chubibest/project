interface parent {

}

export default {
  async signup(parent: any, args: any, { prisma: { mutation } }: any, info: any){
    console.log("******", parent, "******")
    console.log("******", args, "****")
    console.log("*****", info, "*****")
   const result = await mutation.createUser({
      data: {
       ...args.data
      }
    })

    console.log(result)
    return(
      {
      user: args.data,
      token: "ddddddd"

      }
    )
  }
}

