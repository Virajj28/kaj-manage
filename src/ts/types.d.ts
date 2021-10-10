import React from "react"
import { DocumentData } from "@firebase/firestore-types"
import { Icolumn, Itask, ItaskData } from "./interfaces"
import { DropResult } from "react-beautiful-dnd"

// context types

export type TprojectId = string

export type TsetProjectId = React.Dispatch<React.SetStateAction<string>>

export type TcontextTaskData = DocumentData | undefined | ItaskData

export type TsetContextTaskData = React.Dispatch<
  React.SetStateAction<DocumentData | undefined | ItaskData>
>

export type ThandleAddTask = {
  currentId: string
  btnType?: string
  addNewData: Itask
  column: Icolumn
  taskData: TcontextTaskData
  projectId: TprojectId
  setTaskData: TsetContextTaskData
}

export type ThandleOnDragEnd = {
  result: DropResult
  taskData: DocumentData | ItaskData
  projectId: TprojectId
  setTaskData: TsetContextTaskData
}

export type ThandleDeleteTask = {
  task: Itask
  projectId: TprojectId
  column: Icolumn
  taskData: TcontextTaskData
  setTaskData: TsetContextTaskData
}
