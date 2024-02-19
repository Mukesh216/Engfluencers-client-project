import express from "express";
import { submitComment , fetchworkSheets , downloadPdf } from "../controller/filesController.js"
import { fetchRsrcworkSheets , downloadRscPdf } from "../controller/resourceFileController.js";

const userRouter =  express.Router();

//fetching all collections and subcollections

userRouter.post("/blogs/comments" , submitComment);

userRouter.get("/worksheets" , fetchworkSheets);

userRouter.all("/worksheets/download" , downloadPdf);


//resources

userRouter.get("/resources/worksheets" , fetchRsrcworkSheets);

userRouter.all("/resources/download" , downloadRscPdf);



export default userRouter;




// userRouter.post("/blogs/comments" , submitComment);

// userRouter.get("/materials/:levelName" , fetchCollections);

// userRouter.get("/materials/:levelName/:collectionName" , fetchSubCollections);

// userRouter.all("/materials/:levelName/:collectionName/:subcollectionName/download" , downloadPdf);





