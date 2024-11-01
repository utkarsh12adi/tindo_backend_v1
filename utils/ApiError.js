class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went Wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.message=message
        this.data=null
        this.success=false;
        this.errors=this.errors


    }
}