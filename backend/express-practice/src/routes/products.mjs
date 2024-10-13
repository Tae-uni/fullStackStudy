import { Router } from "express";

const router = Router();

router.get('/api/products', (request, response) => {
  console.log(request.headers.cookie);
  console.log(request.cookies);
  console.log(request.signedCookies.hello);
  if (request.signedCookies.hello && request.signedCookies.hello === 'value') {
    response.send([
      { id: 123, name: "Chicken breast", price: 12.99 }
    ]);
  } else {
    return response.status(403).send({ msg: "Sorry. You need the correct cookie" });
  }
});

export default router;