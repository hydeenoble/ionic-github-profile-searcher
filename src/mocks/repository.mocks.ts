import { Repository } from "../models/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList: Repository[]  = [
  {
    name: 'Repo Name 1',
    description: 'this is the description',
    owner: USER_LIST[0]
  },{
    name: 'Repo Name 2',
    description: 'this is the description',
    owner: USER_LIST[1]
  },{
    name: 'Repo Name 3',
    description: 'this is the description',
    owner: USER_LIST[0]
  },{
    name: 'Repo Name 4',
    description: 'this is the description',
    owner: USER_LIST[1]
  },{
    name: 'Repo Name 5',
    description: 'this is the description',
    owner: USER_LIST[0]
  }
];

export const REPOSITORY_LIST = repositoryList;
