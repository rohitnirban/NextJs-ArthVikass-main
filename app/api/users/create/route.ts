import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";

export async function POST(request: Request) {
    await dbConnect();

    try {
        const { name, garbageTax, propertyTax, waterTax, lat, lng, markerImage } = await request.json();

        const newUser = new UserModel({
            name,
            garbageTax,
            propertyTax,
            waterTax,
            lat,
            lng,
            markerImage
        })

        await newUser.save();
        return Response.json(
            {
                success: true,
                message: "User Created Successfully"
            },
            {
                status: 200
            }
        );
    } catch (error) {
        console.log("Error in creating user ", error);
        return Response.json(
            {
                success: false,
                message: "Error in creating user"
            },
            {
                status: 500
            }
        );
    }
}