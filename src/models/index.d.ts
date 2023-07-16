import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TestModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTestModel = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestModel = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestModel = LazyLoading extends LazyLoadingDisabled ? EagerTestModel : LazyTestModel

export declare const TestModel: (new (init: ModelInit<TestModel, TestModelMetaData>) => TestModel) & {
  copyOf(source: TestModel, mutator: (draft: MutableModel<TestModel, TestModelMetaData>) => MutableModel<TestModel, TestModelMetaData> | void): TestModel;
}