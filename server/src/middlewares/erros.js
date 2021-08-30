// return {
//     error: "ok",
//     message: "something went wrong",
//   };


export const errorHandler = (err, req, res, next) => {
    res.status(500)
    res.send('error', { error: "Something went wrong" });
};