


const Registro = () => {
    return (
        <div>
            <form>
            <div className="mb-3">
                 <label for="exampleInputEmail1" class="form-label">Email</label>
                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                 <label for="exampleInputEmail1" class="form-label">Nombre Usuario</label>
                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
                <div class="mb-3 form-check">
                 <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            </div>
                <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
                </form>
        </div>
    )
}
export default Registro 