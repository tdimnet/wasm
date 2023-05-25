(module
  (func $sub (param $number i32) (result i32)
    get_local $number
    i32.const 1
    i32.sub)
  (export "sub" (func $sub))
)
