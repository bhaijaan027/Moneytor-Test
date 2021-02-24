import { Router } from "express";
const router = Router();

import {
  createNewServer,
  getServerById,
  getServers,
  updateServer,
  deleteServer,
} from "./controller.mjs";

router.get("/servers", async (req, res) => {
  // USING .then
  //   getServers()
  //     .then((serverData) => {
  //       console.log(serverData);
  //       return res.send(`${serverData}`);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  try {
    const servers = await getServers();
    console.log(servers);
    return res.send(`${servers}`);
  } catch (err) {
    console.log(err);
  }
});

router.get("/servers/:id", async (req, res) => {
  // USING .then
  //   getServerById(req.params.id)
  //     .then((serverData) => {
  //       console.log(serverData);
  //       return res.send(`${serverData}`);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  try {
    const server = await getServerById(req.params.id);
    console.log(server);
    return res.send(`${server}`);
  } catch (err) {
    console.log(err);
  }
});

router.post("/servers", async (req, res) => {
  // USING .then
  //   createNewServer(req.body)
  //     .then((serverData) => {
  //       console.log(serverData);
  //       return res.send(serverData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // return res.sendStatus(500)
  //     });

  try {
    const server = await createNewServer(req.body);
    console.log(server);
    return res.send(`${server}`);
  } catch (err) {
    console.log(err);
  }
});

router.put("/servers/:id", async (req, res) => {
  // USING .then
  //   updateServer(req.params.id, req.body)
  //     .then((serverData) => {
  //       console.log(serverData);
  //       return res.send(serverData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // return res.sendStatus(500)
  //     });

  try {
    const server = await updateServer(req.params.id, req.body);
    console.log(server);
    return res.send(`${server}`);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/servers/:id", async (req, res) => {
  // USING .then
  //   deleteServer(req.params.id)
  //     .then((serverData) => {
  //       console.log(serverData);
  //       return res.send(serverData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // return res.sendStatus(500)
  //     });

  try {
    const server = await deleteServer(req.params.id);
    console.log(server);
    return res.send(`${server}`);
  } catch (err) {
    console.log(err);
  }
});

export { router as serverRouter };
