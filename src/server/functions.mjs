import { serverModel } from "./model.mjs";

export const createNewServer = async (serverInput) => {
  const newServer = await serverModel.create(serverInput);
  console.log("server data", newServer);
  return newServer;
};

export const updateServer = async (id, serverInput) => {
  const newServer = await serverModel.findByIdAndUpdate(id, serverInput, {
    new: true,
  });
  console.log("server data", newServer);
  return newServer;
};

export const getServerById = async (id) => {
  return await serverModel.findById(id);
};

export const getServers = async () => {
  return await serverModel.find();
};

export const deleteServer = async (id) => {
  const newServer = await serverModel.findByIdAndDelete(id);
  console.log("server data", newServer);
  return newServer;
};
