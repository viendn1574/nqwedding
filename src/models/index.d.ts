import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerGift = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gift, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly gift?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGift = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gift, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly gift?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Gift = LazyLoading extends LazyLoadingDisabled ? EagerGift : LazyGift

export declare const Gift: (new (init: ModelInit<Gift>) => Gift) & {
  copyOf(source: Gift, mutator: (draft: MutableModel<Gift>) => MutableModel<Gift> | void): Gift;
}