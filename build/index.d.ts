declare const path: any;
declare const series_generator: any;
declare const series_iterator: any;
declare const divide: any;
declare const chainables: any;
declare const parallel_generator: any;
declare const settle_generator: any;
declare const dowhilst_generator: any;
declare const retry_generator: any;
declare const QUEUE: any;
declare var _series: (operations: any, cb: any) => any;
declare var _map: (operation: any, values: any, concurrency: any, cb: any) => any;
declare var _settle: (fns: any) => any;
declare var _parallel: (fns: any, args: any) => any;
declare var _dowhilst: (fn: any, evaluate: any, cb: any) => void;
declare var _iterate: (generator: any, cb: any) => void;
declare var _retry: (fn: any, options: any, cb: any) => void;
declare var safe_assign: (data: any) => {};
declare var isGenerator: (val: any) => boolean;
declare var _handleRecursiveParallel: (fns: any) => {};
