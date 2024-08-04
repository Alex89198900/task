export interface QweryType {
  avatar_url: string
  children: Array<unknown>
  company_last_contacted: { in: unknown; out: unknown }
  contexts: Array<unknown>
  created: string
  creator: string
  creator_id: string
  employers_info: Array<unknown>
  fields: { email: Array<Fields>; "first name": Array<Fields>; "last name": Array<Fields> }
  files: unknown
  id: string
  is_editable: boolean
  is_important: boolean
  last_contacted: {
    tstamp: string
    type: string
    object_id: string
    user_id: string
    deletion_tstamp: unknown
  }
  last_contacted_user: unknown
  lc: unknown
  notice: unknown
  object_type: string
  owner_id: unknown
  privacy: { read: unknown; edit: unknown }
  record_type: string
  reminder: unknown
  reminders: unknown
  stages_info: unknown
  tags: Array<string>
  tags2: Array<string>
  updated: string
  updater: unknown
}

export interface ResponseData {
  meta: unknown
  resources: Array<QweryType>
}

export interface Fields {
  label: string
  modifier: string
  value: string
  is_primary: boolean
}



export interface CreateContctType {
  name: string;
  surname?:string;
  email:string;
}

