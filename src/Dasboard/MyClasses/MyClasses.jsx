

const MyClasses = () => {
    return (
        <div className="w-full px-10">
            <div className="w-full">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Class Name</th>
                            <th>Status</th>
                            <th>Enrolled</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>
                                <div className="font-bold">Hart Hagerty</div>
                            </td>
                            <td>
                                pending
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">Update</button>
                            </th>
                        </tr>



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;