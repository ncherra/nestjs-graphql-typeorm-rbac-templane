
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateRoleInput {
    name: string;
}

export interface UpdateRoleInput {
    id: number;
    name: string;
}

export interface CreateRoleUserInput {
    id: number;
}

export interface AddUserArgs {
    username: string;
    password: string;
    email: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface ReadRolesOutput {
    id: number;
    name: string;
}

export interface IQuery {
    role(roleId: number): ReadRolesOutput | Promise<ReadRolesOutput>;
    roles(): ReadRolesOutput[] | Promise<ReadRolesOutput[]>;
    roleUsers(): ReadRolesOutput[] | Promise<ReadRolesOutput[]>;
    roleUser(id: number): ReadRolesOutput | Promise<ReadRolesOutput>;
    userById(userId: number): User | Promise<User>;
    users(): User[] | Promise<User[]>;
}

export interface IMutation {
    createRole(createRoleInput: CreateRoleInput): string | Promise<string>;
    updateRole(updateRoleInput: UpdateRoleInput): string | Promise<string>;
    removeRole(id: number): string | Promise<string>;
    createRoleUser(createRoleUserInput: CreateRoleUserInput): string | Promise<string>;
    deleteUser(userId: number): string | Promise<string>;
    addUserArgs(addUserArgs: AddUserArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
