import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Car = {
  __typename?: 'Car';
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateCarName?: Maybe<Car>;
};


export type MutationUpdateCarNameArgs = {
  _id: Scalars['String'];
  newName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  car?: Maybe<Array<Maybe<Car>>>;
  train?: Maybe<Array<Maybe<Train>>>;
};


export type QueryCarArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryTrainArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  carChanged?: Maybe<Car>;
};

export type Train = {
  __typename?: 'Train';
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateCarNameMutationVariables = {
  _id: Scalars['String'];
  newName: Scalars['String'];
};


export type UpdateCarNameMutation = (
  { __typename?: 'Mutation' }
  & {
    updateCarName?: Maybe<(
      { __typename?: 'Car' }
      & Pick<Car, '_id' | 'name'>
    )>
  }
);

export type CarQueryVariables = {
  name?: Maybe<Scalars['String']>;
};


export type CarQuery = (
  { __typename?: 'Query' }
  & {
    car?: Maybe<Array<Maybe<(
      { __typename?: 'Car' }
      & Pick<Car, 'name' | '_id'>
    )>>>
  }
);

export type Car2QueryVariables = {
  name?: Maybe<Scalars['String']>;
};


export type Car2Query = (
  { __typename?: 'Query' }
  & {
    car?: Maybe<Array<Maybe<(
      { __typename?: 'Car' }
      & Pick<Car, 'name'>
    )>>>
  }
);

export const UpdateCarNameDocument = gql`
    mutation updateCarName($_id: String!, $newName: String!) {
  updateCarName(_id: $_id, newName: $newName) {
    _id
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class UpdateCarNameGQL extends Apollo.Mutation<UpdateCarNameMutation, UpdateCarNameMutationVariables> {
  document = UpdateCarNameDocument;

}
export const CarDocument = gql`
    query car($name: String) {
  car(name: $name) {
    name
    _id
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class CarGQL extends Apollo.Query<CarQuery, CarQueryVariables> {
  document = CarDocument;

}
export const Car2Document = gql`
    query car2($name: String) {
  car(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class Car2GQL extends Apollo.Query<Car2Query, Car2QueryVariables> {
  document = Car2Document;

}
