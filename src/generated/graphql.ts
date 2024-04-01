import { useMutation, useQuery, useSuspenseQuery, useInfiniteQuery, useSuspenseInfiniteQuery, UseMutationOptions, UseQueryOptions, UseSuspenseQueryOptions, UseInfiniteQueryOptions, InfiniteData, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';
import { fetcher } from '../helpers/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

            type FetchOptions = {
              cache?: RequestCache;
              next?: NextFetchRequestConfig;
            };
            
            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  json: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Containing the courses on the app */
export type Course = {
  __typename?: 'Course';
  Chapters: Array<Scalars['json']['output']>;
  CourseName: Scalars['String']['output'];
  Description: Scalars['String']['output'];
  Id: Scalars['Int']['output'];
  Links?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "Course" */
export type Course_Aggregate = {
  __typename?: 'Course_aggregate';
  aggregate?: Maybe<Course_Aggregate_Fields>;
  nodes: Array<Course>;
};

/** aggregate fields of "Course" */
export type Course_Aggregate_Fields = {
  __typename?: 'Course_aggregate_fields';
  avg?: Maybe<Course_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Course_Max_Fields>;
  min?: Maybe<Course_Min_Fields>;
  stddev?: Maybe<Course_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Sum_Fields>;
  var_pop?: Maybe<Course_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Var_Samp_Fields>;
  variance?: Maybe<Course_Variance_Fields>;
};


/** aggregate fields of "Course" */
export type Course_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Course_Avg_Fields = {
  __typename?: 'Course_avg_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Course". All fields are combined with a logical 'AND'. */
export type Course_Bool_Exp = {
  Chapters?: InputMaybe<Json_Array_Comparison_Exp>;
  CourseName?: InputMaybe<String_Comparison_Exp>;
  Description?: InputMaybe<String_Comparison_Exp>;
  Id?: InputMaybe<Int_Comparison_Exp>;
  Links?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Course_Bool_Exp>>;
  _not?: InputMaybe<Course_Bool_Exp>;
  _or?: InputMaybe<Array<Course_Bool_Exp>>;
};

/** unique or primary key constraints on table "Course" */
export enum Course_Constraint {
  /** unique or primary key constraint on columns "Id" */
  CoursePkey = 'Course_pkey'
}

/** input type for incrementing numeric columns in table "Course" */
export type Course_Inc_Input = {
  Id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Course" */
export type Course_Insert_Input = {
  Chapters?: InputMaybe<Array<Scalars['json']['input']>>;
  CourseName?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['Int']['input']>;
  Links?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Course_Max_Fields = {
  __typename?: 'Course_max_fields';
  Chapters?: Maybe<Array<Scalars['json']['output']>>;
  CourseName?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Links?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Course_Min_Fields = {
  __typename?: 'Course_min_fields';
  Chapters?: Maybe<Array<Scalars['json']['output']>>;
  CourseName?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Links?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Course" */
export type Course_Mutation_Response = {
  __typename?: 'Course_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Course>;
};

/** on_conflict condition type for table "Course" */
export type Course_On_Conflict = {
  constraint: Course_Constraint;
  update_columns?: Array<Course_Update_Column>;
  where?: InputMaybe<Course_Bool_Exp>;
};

/** Ordering options when selecting data from "Course". */
export type Course_Order_By = {
  Chapters?: InputMaybe<Order_By>;
  CourseName?: InputMaybe<Order_By>;
  Description?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Links?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Course */
export type Course_Pk_Columns_Input = {
  Id: Scalars['Int']['input'];
};

/** select columns of table "Course" */
export enum Course_Select_Column {
  /** column name */
  Chapters = 'Chapters',
  /** column name */
  CourseName = 'CourseName',
  /** column name */
  Description = 'Description',
  /** column name */
  Id = 'Id',
  /** column name */
  Links = 'Links'
}

/** input type for updating data in table "Course" */
export type Course_Set_Input = {
  Chapters?: InputMaybe<Array<Scalars['json']['input']>>;
  CourseName?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['Int']['input']>;
  Links?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Course_Stddev_Fields = {
  __typename?: 'Course_stddev_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Course_Stddev_Pop_Fields = {
  __typename?: 'Course_stddev_pop_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Course_Stddev_Samp_Fields = {
  __typename?: 'Course_stddev_samp_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Course" */
export type Course_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Course_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Course_Stream_Cursor_Value_Input = {
  Chapters?: InputMaybe<Array<Scalars['json']['input']>>;
  CourseName?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['Int']['input']>;
  Links?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Course_Sum_Fields = {
  __typename?: 'Course_sum_fields';
  Id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Course" */
export enum Course_Update_Column {
  /** column name */
  Chapters = 'Chapters',
  /** column name */
  CourseName = 'CourseName',
  /** column name */
  Description = 'Description',
  /** column name */
  Id = 'Id',
  /** column name */
  Links = 'Links'
}

export type Course_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Course_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Course_Set_Input>;
  /** filter the rows which have to be updated */
  where: Course_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Course_Var_Pop_Fields = {
  __typename?: 'Course_var_pop_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Course_Var_Samp_Fields = {
  __typename?: 'Course_var_samp_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Course_Variance_Fields = {
  __typename?: 'Course_variance_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** These are course feedbacks */
export type Feedback = {
  __typename?: 'Feedback';
  CourseId: Scalars['Int']['output'];
  IsCompleted: Scalars['Boolean']['output'];
  UserId: Scalars['uuid']['output'];
  id: Scalars['Int']['output'];
};

/** aggregated selection of "Feedback" */
export type Feedback_Aggregate = {
  __typename?: 'Feedback_aggregate';
  aggregate?: Maybe<Feedback_Aggregate_Fields>;
  nodes: Array<Feedback>;
};

/** aggregate fields of "Feedback" */
export type Feedback_Aggregate_Fields = {
  __typename?: 'Feedback_aggregate_fields';
  avg?: Maybe<Feedback_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Feedback_Max_Fields>;
  min?: Maybe<Feedback_Min_Fields>;
  stddev?: Maybe<Feedback_Stddev_Fields>;
  stddev_pop?: Maybe<Feedback_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feedback_Stddev_Samp_Fields>;
  sum?: Maybe<Feedback_Sum_Fields>;
  var_pop?: Maybe<Feedback_Var_Pop_Fields>;
  var_samp?: Maybe<Feedback_Var_Samp_Fields>;
  variance?: Maybe<Feedback_Variance_Fields>;
};


/** aggregate fields of "Feedback" */
export type Feedback_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feedback_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Feedback_Avg_Fields = {
  __typename?: 'Feedback_avg_fields';
  CourseId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Feedback". All fields are combined with a logical 'AND'. */
export type Feedback_Bool_Exp = {
  CourseId?: InputMaybe<Int_Comparison_Exp>;
  IsCompleted?: InputMaybe<Boolean_Comparison_Exp>;
  UserId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Feedback_Bool_Exp>>;
  _not?: InputMaybe<Feedback_Bool_Exp>;
  _or?: InputMaybe<Array<Feedback_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Feedback" */
export enum Feedback_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeedbackPkey = 'Feedback_pkey'
}

/** input type for incrementing numeric columns in table "Feedback" */
export type Feedback_Inc_Input = {
  CourseId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Feedback" */
export type Feedback_Insert_Input = {
  CourseId?: InputMaybe<Scalars['Int']['input']>;
  IsCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  UserId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Feedback_Max_Fields = {
  __typename?: 'Feedback_max_fields';
  CourseId?: Maybe<Scalars['Int']['output']>;
  UserId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Feedback_Min_Fields = {
  __typename?: 'Feedback_min_fields';
  CourseId?: Maybe<Scalars['Int']['output']>;
  UserId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "Feedback" */
export type Feedback_Mutation_Response = {
  __typename?: 'Feedback_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Feedback>;
};

/** on_conflict condition type for table "Feedback" */
export type Feedback_On_Conflict = {
  constraint: Feedback_Constraint;
  update_columns?: Array<Feedback_Update_Column>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};

/** Ordering options when selecting data from "Feedback". */
export type Feedback_Order_By = {
  CourseId?: InputMaybe<Order_By>;
  IsCompleted?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Feedback */
export type Feedback_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Feedback" */
export enum Feedback_Select_Column {
  /** column name */
  CourseId = 'CourseId',
  /** column name */
  IsCompleted = 'IsCompleted',
  /** column name */
  UserId = 'UserId',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "Feedback" */
export type Feedback_Set_Input = {
  CourseId?: InputMaybe<Scalars['Int']['input']>;
  IsCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  UserId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Feedback_Stddev_Fields = {
  __typename?: 'Feedback_stddev_fields';
  CourseId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Feedback_Stddev_Pop_Fields = {
  __typename?: 'Feedback_stddev_pop_fields';
  CourseId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Feedback_Stddev_Samp_Fields = {
  __typename?: 'Feedback_stddev_samp_fields';
  CourseId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Feedback" */
export type Feedback_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feedback_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feedback_Stream_Cursor_Value_Input = {
  CourseId?: InputMaybe<Scalars['Int']['input']>;
  IsCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  UserId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Feedback_Sum_Fields = {
  __typename?: 'Feedback_sum_fields';
  CourseId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Feedback" */
export enum Feedback_Update_Column {
  /** column name */
  CourseId = 'CourseId',
  /** column name */
  IsCompleted = 'IsCompleted',
  /** column name */
  UserId = 'UserId',
  /** column name */
  Id = 'id'
}

export type Feedback_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Feedback_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feedback_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feedback_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Feedback_Var_Pop_Fields = {
  __typename?: 'Feedback_var_pop_fields';
  CourseId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Feedback_Var_Samp_Fields = {
  __typename?: 'Feedback_var_samp_fields';
  CourseId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Feedback_Variance_Fields = {
  __typename?: 'Feedback_variance_fields';
  CourseId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** This a table for my users */
export type User = {
  __typename?: 'User';
  Email: Scalars['String']['output'];
  FirstName: Scalars['String']['output'];
  Id: Scalars['uuid']['output'];
  LastName: Scalars['String']['output'];
  Password: Scalars['String']['output'];
  Role: Scalars['Int']['output'];
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'User_avg_fields';
  Role?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Email?: InputMaybe<String_Comparison_Exp>;
  FirstName?: InputMaybe<String_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  LastName?: InputMaybe<String_Comparison_Exp>;
  Password?: InputMaybe<String_Comparison_Exp>;
  Role?: InputMaybe<Int_Comparison_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "Email" */
  UserEmailKey = 'User_Email_key',
  /** unique or primary key constraint on columns "Id" */
  UserPkey = 'User_pkey'
}

/** input type for incrementing numeric columns in table "User" */
export type User_Inc_Input = {
  Role?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['uuid']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  Password?: InputMaybe<Scalars['String']['input']>;
  Role?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  Email?: Maybe<Scalars['String']['output']>;
  FirstName?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['uuid']['output']>;
  LastName?: Maybe<Scalars['String']['output']>;
  Password?: Maybe<Scalars['String']['output']>;
  Role?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  Email?: Maybe<Scalars['String']['output']>;
  FirstName?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['uuid']['output']>;
  LastName?: Maybe<Scalars['String']['output']>;
  Password?: Maybe<Scalars['String']['output']>;
  Role?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Password?: InputMaybe<Order_By>;
  Role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  Id: Scalars['uuid']['input'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Id = 'Id',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Password = 'Password',
  /** column name */
  Role = 'Role'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['uuid']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  Password?: InputMaybe<Scalars['String']['input']>;
  Role?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  Role?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  Role?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  Role?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['uuid']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  Password?: InputMaybe<Scalars['String']['input']>;
  Role?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'User_sum_fields';
  Role?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Id = 'Id',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Password = 'Password',
  /** column name */
  Role = 'Role'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  Role?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  Role?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'User_variance_fields';
  Role?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['json']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['json']['input']>>;
  _eq?: InputMaybe<Array<Scalars['json']['input']>>;
  _gt?: InputMaybe<Array<Scalars['json']['input']>>;
  _gte?: InputMaybe<Array<Scalars['json']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['json']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['json']['input']>>;
  _lte?: InputMaybe<Array<Scalars['json']['input']>>;
  _neq?: InputMaybe<Array<Scalars['json']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['json']['input']>>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Course" */
  delete_Course?: Maybe<Course_Mutation_Response>;
  /** delete single row from the table: "Course" */
  delete_Course_by_pk?: Maybe<Course>;
  /** delete data from the table: "Feedback" */
  delete_Feedback?: Maybe<Feedback_Mutation_Response>;
  /** delete single row from the table: "Feedback" */
  delete_Feedback_by_pk?: Maybe<Feedback>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Course" */
  insert_Course?: Maybe<Course_Mutation_Response>;
  /** insert a single row into the table: "Course" */
  insert_Course_one?: Maybe<Course>;
  /** insert data into the table: "Feedback" */
  insert_Feedback?: Maybe<Feedback_Mutation_Response>;
  /** insert a single row into the table: "Feedback" */
  insert_Feedback_one?: Maybe<Feedback>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Course" */
  update_Course?: Maybe<Course_Mutation_Response>;
  /** update single row of the table: "Course" */
  update_Course_by_pk?: Maybe<Course>;
  /** update multiples rows of table: "Course" */
  update_Course_many?: Maybe<Array<Maybe<Course_Mutation_Response>>>;
  /** update data of the table: "Feedback" */
  update_Feedback?: Maybe<Feedback_Mutation_Response>;
  /** update single row of the table: "Feedback" */
  update_Feedback_by_pk?: Maybe<Feedback>;
  /** update multiples rows of table: "Feedback" */
  update_Feedback_many?: Maybe<Array<Maybe<Feedback_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CourseArgs = {
  where: Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_By_PkArgs = {
  Id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_FeedbackArgs = {
  where: Feedback_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feedback_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  Id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CourseArgs = {
  objects: Array<Course_Insert_Input>;
  on_conflict?: InputMaybe<Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_OneArgs = {
  object: Course_Insert_Input;
  on_conflict?: InputMaybe<Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FeedbackArgs = {
  objects: Array<Feedback_Insert_Input>;
  on_conflict?: InputMaybe<Feedback_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_OneArgs = {
  object: Feedback_Insert_Input;
  on_conflict?: InputMaybe<Feedback_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CourseArgs = {
  _inc?: InputMaybe<Course_Inc_Input>;
  _set?: InputMaybe<Course_Set_Input>;
  where: Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_By_PkArgs = {
  _inc?: InputMaybe<Course_Inc_Input>;
  _set?: InputMaybe<Course_Set_Input>;
  pk_columns: Course_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_ManyArgs = {
  updates: Array<Course_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FeedbackArgs = {
  _inc?: InputMaybe<Feedback_Inc_Input>;
  _set?: InputMaybe<Feedback_Set_Input>;
  where: Feedback_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_By_PkArgs = {
  _inc?: InputMaybe<Feedback_Inc_Input>;
  _set?: InputMaybe<Feedback_Set_Input>;
  pk_columns: Feedback_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_ManyArgs = {
  updates: Array<Feedback_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Course" */
  Course: Array<Course>;
  /** fetch aggregated fields from the table: "Course" */
  Course_aggregate: Course_Aggregate;
  /** fetch data from the table: "Course" using primary key columns */
  Course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "Feedback" */
  Feedback: Array<Feedback>;
  /** fetch aggregated fields from the table: "Feedback" */
  Feedback_aggregate: Feedback_Aggregate;
  /** fetch data from the table: "Feedback" using primary key columns */
  Feedback_by_pk?: Maybe<Feedback>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Query_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Query_RootCourse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Query_RootCourse_By_PkArgs = {
  Id: Scalars['Int']['input'];
};


export type Query_RootFeedbackArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Query_RootFeedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Query_RootFeedback_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  Id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Course" */
  Course: Array<Course>;
  /** fetch aggregated fields from the table: "Course" */
  Course_aggregate: Course_Aggregate;
  /** fetch data from the table: "Course" using primary key columns */
  Course_by_pk?: Maybe<Course>;
  /** fetch data from the table in a streaming manner: "Course" */
  Course_stream: Array<Course>;
  /** fetch data from the table: "Feedback" */
  Feedback: Array<Feedback>;
  /** fetch aggregated fields from the table: "Feedback" */
  Feedback_aggregate: Feedback_Aggregate;
  /** fetch data from the table: "Feedback" using primary key columns */
  Feedback_by_pk?: Maybe<Feedback>;
  /** fetch data from the table in a streaming manner: "Feedback" */
  Feedback_stream: Array<Feedback>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
};


export type Subscription_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourse_By_PkArgs = {
  Id: Scalars['Int']['input'];
};


export type Subscription_RootCourse_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Course_Stream_Cursor_Input>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootFeedbackArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Subscription_RootFeedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Subscription_RootFeedback_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootFeedback_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Feedback_Stream_Cursor_Input>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  Id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type CompleteCourseMutationVariables = Exact<{
  CourseId: Scalars['Int']['input'];
  UserId: Scalars['uuid']['input'];
}>;


export type CompleteCourseMutation = { __typename?: 'mutation_root', insert_Feedback?: { __typename?: 'Feedback_mutation_response', affected_rows: number } | null };

export type DeleteCourseByPkMutationVariables = Exact<{
  Id: Scalars['Int']['input'];
}>;


export type DeleteCourseByPkMutation = { __typename?: 'mutation_root', delete_Course_by_pk?: { __typename?: 'Course', CourseName: string } | null };

export type FeedbackDataQueryVariables = Exact<{
  UserId: Scalars['uuid']['input'];
}>;


export type FeedbackDataQuery = { __typename?: 'query_root', Feedback: Array<{ __typename?: 'Feedback', CourseId: number }> };

export type GetCourseByPkQueryVariables = Exact<{
  Id: Scalars['Int']['input'];
}>;


export type GetCourseByPkQuery = { __typename?: 'query_root', Course_by_pk?: { __typename?: 'Course', Chapters: Array<any>, CourseName: string, Description: string, Links?: string | null } | null };

export type GetCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = { __typename?: 'query_root', Course: Array<{ __typename?: 'Course', Id: number, CourseName: string, Description: string, Chapters: Array<any>, Links?: string | null }>, Course_aggregate: { __typename?: 'Course_aggregate', aggregate?: { __typename?: 'Course_aggregate_fields', count: number } | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', Email: string, FirstName: string, LastName: string }> };

export type InsertNewCourseMutationVariables = Exact<{
  CourseName: Scalars['String']['input'];
  Links: Scalars['String']['input'];
  Description: Scalars['String']['input'];
  Chapters?: InputMaybe<Array<Scalars['json']['input']> | Scalars['json']['input']>;
}>;


export type InsertNewCourseMutation = { __typename?: 'mutation_root', insert_Course?: { __typename?: 'Course_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Course', Chapters: Array<any>, CourseName: string, Links?: string | null }> } | null };

export type InsertNewUserMutationVariables = Exact<{
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  Password?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertNewUserMutation = { __typename?: 'mutation_root', insert_User?: { __typename?: 'User_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'User', Email: string, FirstName: string, LastName: string }> } | null };

export type LoginCheckQueryVariables = Exact<{
  Email?: InputMaybe<Scalars['String']['input']>;
  Password?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginCheckQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', Email: string, FirstName: string, Id: any, Role: number }> };

export type UpdatingCourseMutationVariables = Exact<{
  Id: Scalars['Int']['input'];
  CourseName?: InputMaybe<Scalars['String']['input']>;
  Links?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Chapters?: InputMaybe<Array<Scalars['json']['input']> | Scalars['json']['input']>;
}>;


export type UpdatingCourseMutation = { __typename?: 'mutation_root', update_Course_by_pk?: { __typename?: 'Course', Chapters: Array<any>, CourseName: string, Links?: string | null, Description: string } | null };



export const CompleteCourseDocument = `
    mutation completeCourse($CourseId: Int!, $UserId: uuid!) {
  insert_Feedback(
    objects: {CourseId: $CourseId, IsCompleted: true, UserId: $UserId}
  ) {
    affected_rows
  }
}
    `;

export const useCompleteCourseMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CompleteCourseMutation, TError, CompleteCourseMutationVariables, TContext>) => {
    
    return useMutation<CompleteCourseMutation, TError, CompleteCourseMutationVariables, TContext>(
      {
    mutationKey: ['completeCourse'],
    mutationFn: (variables?: CompleteCourseMutationVariables) => fetcher<CompleteCourseMutation, CompleteCourseMutationVariables>(CompleteCourseDocument, variables)(),
    ...options
  }
    )};


useCompleteCourseMutation.fetcher = (variables: CompleteCourseMutationVariables, options?: RequestInit['headers']) => fetcher<CompleteCourseMutation, CompleteCourseMutationVariables>(CompleteCourseDocument, variables, options);

export const DeleteCourseByPkDocument = `
    mutation deleteCourseByPk($Id: Int!) {
  delete_Course_by_pk(Id: $Id) {
    CourseName
  }
}
    `;

export const useDeleteCourseByPkMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteCourseByPkMutation, TError, DeleteCourseByPkMutationVariables, TContext>) => {
    
    return useMutation<DeleteCourseByPkMutation, TError, DeleteCourseByPkMutationVariables, TContext>(
      {
    mutationKey: ['deleteCourseByPk'],
    mutationFn: (variables?: DeleteCourseByPkMutationVariables) => fetcher<DeleteCourseByPkMutation, DeleteCourseByPkMutationVariables>(DeleteCourseByPkDocument, variables)(),
    ...options
  }
    )};


useDeleteCourseByPkMutation.fetcher = (variables: DeleteCourseByPkMutationVariables, options?: RequestInit['headers']) => fetcher<DeleteCourseByPkMutation, DeleteCourseByPkMutationVariables>(DeleteCourseByPkDocument, variables, options);

export const FeedbackDataDocument = `
    query FeedbackData($UserId: uuid!) {
  Feedback(where: {UserId: {_eq: $UserId}}) {
    CourseId
  }
}
    `;

export const useFeedbackDataQuery = <
      TData = FeedbackDataQuery,
      TError = unknown
    >(
      variables: FeedbackDataQueryVariables,
      options?: Omit<UseQueryOptions<FeedbackDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<FeedbackDataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<FeedbackDataQuery, TError, TData>(
      {
    queryKey: ['FeedbackData', variables],
    queryFn: fetcher<FeedbackDataQuery, FeedbackDataQueryVariables>(FeedbackDataDocument, variables),
    ...options
  }
    )};

useFeedbackDataQuery.getKey = (variables: FeedbackDataQueryVariables) => ['FeedbackData', variables];

export const useSuspenseFeedbackDataQuery = <
      TData = FeedbackDataQuery,
      TError = unknown
    >(
      variables: FeedbackDataQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<FeedbackDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<FeedbackDataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<FeedbackDataQuery, TError, TData>(
      {
    queryKey: ['FeedbackDataSuspense', variables],
    queryFn: fetcher<FeedbackDataQuery, FeedbackDataQueryVariables>(FeedbackDataDocument, variables),
    ...options
  }
    )};

useSuspenseFeedbackDataQuery.getKey = (variables: FeedbackDataQueryVariables) => ['FeedbackDataSuspense', variables];

export const useInfiniteFeedbackDataQuery = <
      TData = InfiniteData<FeedbackDataQuery>,
      TError = unknown
    >(
      variables: FeedbackDataQueryVariables,
      options: Omit<UseInfiniteQueryOptions<FeedbackDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<FeedbackDataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<FeedbackDataQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['FeedbackData.infinite', variables],
      queryFn: (metaData) => fetcher<FeedbackDataQuery, FeedbackDataQueryVariables>(FeedbackDataDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteFeedbackDataQuery.getKey = (variables: FeedbackDataQueryVariables) => ['FeedbackData.infinite', variables];

export const useSuspenseInfiniteFeedbackDataQuery = <
      TData = InfiniteData<FeedbackDataQuery>,
      TError = unknown
    >(
      variables: FeedbackDataQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<FeedbackDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<FeedbackDataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<FeedbackDataQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['FeedbackData.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<FeedbackDataQuery, FeedbackDataQueryVariables>(FeedbackDataDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteFeedbackDataQuery.getKey = (variables: FeedbackDataQueryVariables) => ['FeedbackData.infiniteSuspense', variables];


useFeedbackDataQuery.fetcher = (variables: FeedbackDataQueryVariables, options?: RequestInit['headers']) => fetcher<FeedbackDataQuery, FeedbackDataQueryVariables>(FeedbackDataDocument, variables, options);

export const GetCourseByPkDocument = `
    query getCourseByPk($Id: Int!) {
  Course_by_pk(Id: $Id) {
    Chapters
    CourseName
    Description
    Links
  }
}
    `;

export const useGetCourseByPkQuery = <
      TData = GetCourseByPkQuery,
      TError = unknown
    >(
      variables: GetCourseByPkQueryVariables,
      options?: Omit<UseQueryOptions<GetCourseByPkQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCourseByPkQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetCourseByPkQuery, TError, TData>(
      {
    queryKey: ['getCourseByPk', variables],
    queryFn: fetcher<GetCourseByPkQuery, GetCourseByPkQueryVariables>(GetCourseByPkDocument, variables),
    ...options
  }
    )};

useGetCourseByPkQuery.getKey = (variables: GetCourseByPkQueryVariables) => ['getCourseByPk', variables];

export const useSuspenseGetCourseByPkQuery = <
      TData = GetCourseByPkQuery,
      TError = unknown
    >(
      variables: GetCourseByPkQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GetCourseByPkQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GetCourseByPkQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<GetCourseByPkQuery, TError, TData>(
      {
    queryKey: ['getCourseByPkSuspense', variables],
    queryFn: fetcher<GetCourseByPkQuery, GetCourseByPkQueryVariables>(GetCourseByPkDocument, variables),
    ...options
  }
    )};

useSuspenseGetCourseByPkQuery.getKey = (variables: GetCourseByPkQueryVariables) => ['getCourseByPkSuspense', variables];

export const useInfiniteGetCourseByPkQuery = <
      TData = InfiniteData<GetCourseByPkQuery>,
      TError = unknown
    >(
      variables: GetCourseByPkQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GetCourseByPkQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GetCourseByPkQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<GetCourseByPkQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['getCourseByPk.infinite', variables],
      queryFn: (metaData) => fetcher<GetCourseByPkQuery, GetCourseByPkQueryVariables>(GetCourseByPkDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteGetCourseByPkQuery.getKey = (variables: GetCourseByPkQueryVariables) => ['getCourseByPk.infinite', variables];

export const useSuspenseInfiniteGetCourseByPkQuery = <
      TData = InfiniteData<GetCourseByPkQuery>,
      TError = unknown
    >(
      variables: GetCourseByPkQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<GetCourseByPkQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<GetCourseByPkQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<GetCourseByPkQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['getCourseByPk.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<GetCourseByPkQuery, GetCourseByPkQueryVariables>(GetCourseByPkDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteGetCourseByPkQuery.getKey = (variables: GetCourseByPkQueryVariables) => ['getCourseByPk.infiniteSuspense', variables];


useGetCourseByPkQuery.fetcher = (variables: GetCourseByPkQueryVariables, options?: RequestInit['headers']) => fetcher<GetCourseByPkQuery, GetCourseByPkQueryVariables>(GetCourseByPkDocument, variables, options);

export const GetCoursesDocument = `
    query getCourses {
  Course {
    Id
    CourseName
    Description
    Chapters
    Links
  }
  Course_aggregate {
    aggregate {
      count
    }
  }
}
    `;

export const useGetCoursesQuery = <
      TData = GetCoursesQuery,
      TError = unknown
    >(
      variables?: GetCoursesQueryVariables,
      options?: Omit<UseQueryOptions<GetCoursesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCoursesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetCoursesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getCourses'] : ['getCourses', variables],
    queryFn: fetcher<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, variables),
    ...options
  }
    )};

useGetCoursesQuery.getKey = (variables?: GetCoursesQueryVariables) => variables === undefined ? ['getCourses'] : ['getCourses', variables];

export const useSuspenseGetCoursesQuery = <
      TData = GetCoursesQuery,
      TError = unknown
    >(
      variables?: GetCoursesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GetCoursesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GetCoursesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<GetCoursesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getCoursesSuspense'] : ['getCoursesSuspense', variables],
    queryFn: fetcher<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, variables),
    ...options
  }
    )};

useSuspenseGetCoursesQuery.getKey = (variables?: GetCoursesQueryVariables) => variables === undefined ? ['getCoursesSuspense'] : ['getCoursesSuspense', variables];

export const useInfiniteGetCoursesQuery = <
      TData = InfiniteData<GetCoursesQuery>,
      TError = unknown
    >(
      variables: GetCoursesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GetCoursesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GetCoursesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<GetCoursesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['getCourses.infinite'] : ['getCourses.infinite', variables],
      queryFn: (metaData) => fetcher<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteGetCoursesQuery.getKey = (variables?: GetCoursesQueryVariables) => variables === undefined ? ['getCourses.infinite'] : ['getCourses.infinite', variables];

export const useSuspenseInfiniteGetCoursesQuery = <
      TData = InfiniteData<GetCoursesQuery>,
      TError = unknown
    >(
      variables: GetCoursesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<GetCoursesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<GetCoursesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<GetCoursesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['getCourses.infiniteSuspense'] : ['getCourses.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteGetCoursesQuery.getKey = (variables?: GetCoursesQueryVariables) => variables === undefined ? ['getCourses.infiniteSuspense'] : ['getCourses.infiniteSuspense', variables];


useGetCoursesQuery.fetcher = (variables?: GetCoursesQueryVariables, options?: RequestInit['headers']) => fetcher<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, variables, options);

export const GetUsersDocument = `
    query getUsers {
  User {
    Email
    FirstName
    LastName
  }
}
    `;

export const useGetUsersQuery = <
      TData = GetUsersQuery,
      TError = unknown
    >(
      variables?: GetUsersQueryVariables,
      options?: Omit<UseQueryOptions<GetUsersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetUsersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetUsersQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getUsers'] : ['getUsers', variables],
    queryFn: fetcher<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, variables),
    ...options
  }
    )};

useGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) => variables === undefined ? ['getUsers'] : ['getUsers', variables];

export const useSuspenseGetUsersQuery = <
      TData = GetUsersQuery,
      TError = unknown
    >(
      variables?: GetUsersQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GetUsersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GetUsersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<GetUsersQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getUsersSuspense'] : ['getUsersSuspense', variables],
    queryFn: fetcher<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, variables),
    ...options
  }
    )};

useSuspenseGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) => variables === undefined ? ['getUsersSuspense'] : ['getUsersSuspense', variables];

export const useInfiniteGetUsersQuery = <
      TData = InfiniteData<GetUsersQuery>,
      TError = unknown
    >(
      variables: GetUsersQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GetUsersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GetUsersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<GetUsersQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['getUsers.infinite'] : ['getUsers.infinite', variables],
      queryFn: (metaData) => fetcher<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) => variables === undefined ? ['getUsers.infinite'] : ['getUsers.infinite', variables];

export const useSuspenseInfiniteGetUsersQuery = <
      TData = InfiniteData<GetUsersQuery>,
      TError = unknown
    >(
      variables: GetUsersQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<GetUsersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<GetUsersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<GetUsersQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['getUsers.infiniteSuspense'] : ['getUsers.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) => variables === undefined ? ['getUsers.infiniteSuspense'] : ['getUsers.infiniteSuspense', variables];


useGetUsersQuery.fetcher = (variables?: GetUsersQueryVariables, options?: RequestInit['headers']) => fetcher<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, variables, options);

export const InsertNewCourseDocument = `
    mutation InsertNewCourse($CourseName: String!, $Links: String!, $Description: String!, $Chapters: [json!]) {
  insert_Course(
    objects: {CourseName: $CourseName, Links: $Links, Description: $Description, Chapters: $Chapters}
  ) {
    affected_rows
    returning {
      Chapters
      CourseName
      Links
    }
  }
}
    `;

export const useInsertNewCourseMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertNewCourseMutation, TError, InsertNewCourseMutationVariables, TContext>) => {
    
    return useMutation<InsertNewCourseMutation, TError, InsertNewCourseMutationVariables, TContext>(
      {
    mutationKey: ['InsertNewCourse'],
    mutationFn: (variables?: InsertNewCourseMutationVariables) => fetcher<InsertNewCourseMutation, InsertNewCourseMutationVariables>(InsertNewCourseDocument, variables)(),
    ...options
  }
    )};


useInsertNewCourseMutation.fetcher = (variables: InsertNewCourseMutationVariables, options?: RequestInit['headers']) => fetcher<InsertNewCourseMutation, InsertNewCourseMutationVariables>(InsertNewCourseDocument, variables, options);

export const InsertNewUserDocument = `
    mutation insertNewUser($Email: String, $FirstName: String, $LastName: String, $Password: String) {
  insert_User(
    objects: {Email: $Email, FirstName: $FirstName, LastName: $LastName, Password: $Password, Role: 1}
  ) {
    affected_rows
    returning {
      Email
      FirstName
      LastName
    }
  }
}
    `;

export const useInsertNewUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertNewUserMutation, TError, InsertNewUserMutationVariables, TContext>) => {
    
    return useMutation<InsertNewUserMutation, TError, InsertNewUserMutationVariables, TContext>(
      {
    mutationKey: ['insertNewUser'],
    mutationFn: (variables?: InsertNewUserMutationVariables) => fetcher<InsertNewUserMutation, InsertNewUserMutationVariables>(InsertNewUserDocument, variables)(),
    ...options
  }
    )};


useInsertNewUserMutation.fetcher = (variables?: InsertNewUserMutationVariables, options?: RequestInit['headers']) => fetcher<InsertNewUserMutation, InsertNewUserMutationVariables>(InsertNewUserDocument, variables, options);

export const LoginCheckDocument = `
    query loginCheck($Email: String, $Password: String) {
  User(where: {Email: {_eq: $Email}, _and: {Password: {_eq: $Password}}}) {
    Email
    FirstName
    Id
    Role
  }
}
    `;

export const useLoginCheckQuery = <
      TData = LoginCheckQuery,
      TError = unknown
    >(
      variables?: LoginCheckQueryVariables,
      options?: Omit<UseQueryOptions<LoginCheckQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<LoginCheckQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<LoginCheckQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['loginCheck'] : ['loginCheck', variables],
    queryFn: fetcher<LoginCheckQuery, LoginCheckQueryVariables>(LoginCheckDocument, variables),
    ...options
  }
    )};

useLoginCheckQuery.getKey = (variables?: LoginCheckQueryVariables) => variables === undefined ? ['loginCheck'] : ['loginCheck', variables];

export const useSuspenseLoginCheckQuery = <
      TData = LoginCheckQuery,
      TError = unknown
    >(
      variables?: LoginCheckQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<LoginCheckQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<LoginCheckQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<LoginCheckQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['loginCheckSuspense'] : ['loginCheckSuspense', variables],
    queryFn: fetcher<LoginCheckQuery, LoginCheckQueryVariables>(LoginCheckDocument, variables),
    ...options
  }
    )};

useSuspenseLoginCheckQuery.getKey = (variables?: LoginCheckQueryVariables) => variables === undefined ? ['loginCheckSuspense'] : ['loginCheckSuspense', variables];

export const useInfiniteLoginCheckQuery = <
      TData = InfiniteData<LoginCheckQuery>,
      TError = unknown
    >(
      variables: LoginCheckQueryVariables,
      options: Omit<UseInfiniteQueryOptions<LoginCheckQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<LoginCheckQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<LoginCheckQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['loginCheck.infinite'] : ['loginCheck.infinite', variables],
      queryFn: (metaData) => fetcher<LoginCheckQuery, LoginCheckQueryVariables>(LoginCheckDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteLoginCheckQuery.getKey = (variables?: LoginCheckQueryVariables) => variables === undefined ? ['loginCheck.infinite'] : ['loginCheck.infinite', variables];

export const useSuspenseInfiniteLoginCheckQuery = <
      TData = InfiniteData<LoginCheckQuery>,
      TError = unknown
    >(
      variables: LoginCheckQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<LoginCheckQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<LoginCheckQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<LoginCheckQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['loginCheck.infiniteSuspense'] : ['loginCheck.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<LoginCheckQuery, LoginCheckQueryVariables>(LoginCheckDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteLoginCheckQuery.getKey = (variables?: LoginCheckQueryVariables) => variables === undefined ? ['loginCheck.infiniteSuspense'] : ['loginCheck.infiniteSuspense', variables];


useLoginCheckQuery.fetcher = (variables?: LoginCheckQueryVariables, options?: RequestInit['headers']) => fetcher<LoginCheckQuery, LoginCheckQueryVariables>(LoginCheckDocument, variables, options);

export const UpdatingCourseDocument = `
    mutation updatingCourse($Id: Int!, $CourseName: String, $Links: String, $Description: String, $Chapters: [json!]) {
  update_Course_by_pk(
    pk_columns: {Id: $Id}
    _set: {Chapters: $Chapters, CourseName: $CourseName, Description: $Description, Links: $Links}
  ) {
    Chapters
    CourseName
    Links
    Description
  }
}
    `;

export const useUpdatingCourseMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdatingCourseMutation, TError, UpdatingCourseMutationVariables, TContext>) => {
    
    return useMutation<UpdatingCourseMutation, TError, UpdatingCourseMutationVariables, TContext>(
      {
    mutationKey: ['updatingCourse'],
    mutationFn: (variables?: UpdatingCourseMutationVariables) => fetcher<UpdatingCourseMutation, UpdatingCourseMutationVariables>(UpdatingCourseDocument, variables)(),
    ...options
  }
    )};


useUpdatingCourseMutation.fetcher = (variables: UpdatingCourseMutationVariables, options?: RequestInit['headers']) => fetcher<UpdatingCourseMutation, UpdatingCourseMutationVariables>(UpdatingCourseDocument, variables, options);
