

export namespace BasicManageType {
  export interface Data<T> {
    [key: string]: T
  }
  export interface IAxiosResponse {
    code: number
    msg?: string
    result?: any
    data?: any
  }
}
