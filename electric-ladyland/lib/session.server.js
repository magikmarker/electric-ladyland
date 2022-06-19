"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroySession = exports.commitSession = exports.getSession = void 0;
var node_1 = require("@remix-run/node");
// import {
//   getSession,
//   commitSession,
//   destroySession,
// } from "./redis-session.server";
// function createDatabaseSessionStorage({ cookie }: { cookie: Cookie }) {
//   return createSessionStorage({
//     cookie,
//     async createData(data, expires) {
//       const { id } = await prisma.session.create({
//         data: {
//           ...data,
//         },
//       });
//       return id;
//     },
//     async readData(id) {
//       return (
//         (await prisma.session.findFirst({
//           where: {
//             id,
//           },
//         })) || null
//       );
//     },
//     async updateData(id, data, expires) {
//       await prisma.session.update({
//         where: {
//           id,
//         },
//         data: {
//           ...data,
//         },
//       });
//     },
//     async deleteData(id) {
//       await prisma.session.delete({
//         where: {
//           id,
//         },
//       });
//     },
//   });
// }
// const { getSession, commitSession, destroySession } =
//   createDatabaseSessionStorage({
//     cookie: {
//       name: "__form_cookie",
//       // @ts-ignore
//       secure: process.env.NODE_ENV === "production", // enable this in prod only,
//       httpOnly: true,
//       path: "/",
//       sameSite: "lax",
//       secrets: [process.env.FORM_SESSION_SECRET ?? "S3cr3tS3cr3ts"],
//     },
//   });
// eslint-disable-next-line @typescript-eslint/unbound-method
var _b = (0, node_1.createCookieSessionStorage)({
    cookie: {
        name: "__new_call",
        maxAge: 30,
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secrets: [(_a = process.env.FORM_SESSION_SECRET) !== null && _a !== void 0 ? _a : "S3cr3tS3cr3ts"],
    },
}), getSession = _b.getSession, commitSession = _b.commitSession, destroySession = _b.destroySession;
exports.getSession = getSession;
exports.commitSession = commitSession;
exports.destroySession = destroySession;
