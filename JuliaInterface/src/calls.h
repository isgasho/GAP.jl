#ifndef JULIAINTERFACE_CALLS_H
#define JULIAINTERFACE_CALLS_H

#include <julia.h>
#include <libgap-api.h>

extern Int IS_JULIA_FUNC(Obj obj);
extern jl_function_t * GET_JULIA_FUNC(Obj obj);
extern Obj NewJuliaCFunc(void * function, Obj arg_names);

#endif